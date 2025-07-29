from rest_framework import generics, permissions
from .models import Livro
from .serializers import LivroSerializer, LivroDetailSerializer, FeedbackSerializer

class ListaLivrosView(generics.ListAPIView):
    queryset = Livro.objects.all()
    serializer_class = LivroSerializer

#O que fizemos? Usamos uma "view genérica" do Django REST Framework. 
# A `ListAPIView` é uma classe pronta que já contém toda a lógica para buscar uma lista de objetos no banco de dados (`queryset = Livro.objects.all()`) e serializá-los (`serializer_class = LivroSerializer`).


class LivroDetailView(generics.RetrieveAPIView):
    queryset = Livro.objects.all()
    serializer_class = LivroDetailSerializer
    """
    Esta view é responsável por buscar e retornar UM único objeto Livro.
    Ela espera receber um 'pk' (Primary Key, ou seja, o ID) da URL para
    saber qual livro buscar no banco de dados.
    """

class FeedbackCreateView(generics.CreateAPIView):
    # A permissão mais importante! Só permite o acesso se o usuário
    # estiver autenticado (ou seja, se enviar um token válido).
    serializer_class = FeedbackSerializer
    permission_classes = [permissions.IsAuthenticated]    

    def perform_create(self, serializer):
        """
        Este método é chamado antes de salvar um novo objeto.
        Nós o usamos para associar o feedback ao usuário logado
        e ao livro correto (pego da URL).
        """
        livro_pk = self.kwargs.get('pk')
        livro = Livro.objects.get(pk=livro_pk)
        # Salva o feedback, associando o 'usuario' ao 'request.user' (usuário logado)
        # e o 'livro' ao livro que encontramos.
        serializer.save(usuario=self.request.user, livro=livro)