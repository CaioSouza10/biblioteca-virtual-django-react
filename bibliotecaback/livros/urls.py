from django.urls import path
from .views import ListaLivrosView, LivroDetailView, FeedbackCreateView

urlpatterns = [
    path('livros/', ListaLivrosView.as_view(), name='lista-livros'),
    path('livros/<int:pk>/', LivroDetailView.as_view(), name='detalhe-livro'),
    path('livros/<int:pk>/feedback/', FeedbackCreateView.as_view(), name='criar-feedback'),
]
    # A sintaxe <int:pk> é especial. Ela captura um número inteiro da URL
    # e o passa para a view como um argumento chamado 'pk'.
    # Ex: /api/livros/1/ -> pk=1
    # Ex: /api/livros/25/ -> pk=25