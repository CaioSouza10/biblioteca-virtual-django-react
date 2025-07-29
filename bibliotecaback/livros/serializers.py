from rest_framework import serializers
from .models import Livro, Feedback

class FeedbackSerializer(serializers.ModelSerializer):
    """
    Serializador para o modelo Feedback.
    """
    # 'source' permite buscar o username do objeto usuario relacionado.
    # 'read_only=True' garante que não podemos definir o usuário por este campo,
    # ele será definido automaticamente pela view.
    usuario = serializers.CharField(source='usuario.username', read_only=True)

    class Meta:
        model = Feedback
        # CORRIGIDO: 'comentario' sem acento
        fields = ['id', 'usuario', 'nota', 'comentario', 'criado_em']

class LivroSerializer(serializers.ModelSerializer):
    """
    Serializador geral para o modelo Livro, usado para a lista.
    """
    class Meta:
        model = Livro
        fields = ['id', 'titulo', 'autor', 'preco', 'capa']

class LivroDetailSerializer(serializers.ModelSerializer):
    """
    Serializador para a página de detalhes do Livro.
    Inclui os feedbacks aninhados.
    """
    # Usa o FeedbackSerializer para o campo 'feedbacks' do nosso modelo.
    # 'many=True' indica que pode haver múltiplos feedbacks.
    # 'read_only=True' significa que só podemos ler os feedbacks, não criá-los por aqui.
    feedbacks = FeedbackSerializer(many=True, read_only=True)

    class Meta:
        # CORRIGIDO: usa '=' em vez de ':'
        model = Livro
        # CORRIGIDO: 'titulo' sem acento
        fields = ['id', 'titulo', 'autor', 'resumo', 'preco', 'feedbacks', 'capa']