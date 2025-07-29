from django.urls import path 
from .views import UserCreateView # Importa a nossa view de criação de usuário
from rest_framework.authtoken.views import obtain_auth_token # Importa a view de login pronta do DRF

urlpatterns = [
    path('register/', UserCreateView.as_view(), name='register'),
    path('login/', obtain_auth_token, name='login'),
]
    # URL para o registro de um novo usuário
    # Quando uma requisição POST for feita para /api/register/,
    # a UserCreateView será chamada.

    # URL para o login do usuário
    # Quando uma requisição POST com 'username' e 'password' for feita
    # para /api/login/, a view obtain_auth_token retornará um token.