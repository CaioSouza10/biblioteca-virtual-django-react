from rest_framework import generics, permissions
from .serializers import UserSerializer
from django.contrib.auth.models import User

class UserCreateView(generics.CreateAPIView):
    """
    Uma view para criar novos usuários.
    Ela só permite requisições POST.
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    # Define a consulta base para buscar usuários (embora aqui só criemos)
    # Associa a view com o serializador de usuário
    # OBS: A view de login não precisa ser criada por nós!
    # O Django REST Framework já fornece uma view pronta para obter um token.
    # Vamos apenas conectá-la na URL no próximo passo.

  # Esta linha sobrepõe a configuração global do settings.py
    # e diz que QUALQUER UM (AllowAny) pode acessar este endpoint.
    permission_classes = [permissions.AllowAny]