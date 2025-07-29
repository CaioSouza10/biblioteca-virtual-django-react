# backend/usuarios/management/commands/createsu.py

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
import os

class Command(BaseCommand):
    help = 'Cria um superusuário a partir de variáveis de ambiente.'

    def handle(self, *args, **options):
        # Pega as credenciais das variáveis de ambiente
        username = os.environ.get('DJANGO_SUPERUSER_USERNAME')
        email = os.environ.get('DJANGO_SUPERUSER_EMAIL')
        password = os.environ.get('DJANGO_SUPERUSER_PASSWORD')

        if not all([username, email, password]):
            self.stdout.write(self.style.ERROR(
                'As variáveis de ambiente DJANGO_SUPERUSER_USERNAME, '
                'DJANGO_SUPERUSER_EMAIL e DJANGO_SUPERUSER_PASSWORD devem ser definidas.'
            ))
            return

        if User.objects.filter(username=username).exists():
            self.stdout.write(self.style.WARNING(
                f"Usuário '{username}' já existe. Nenhuma ação foi tomada."
            ))
        else:
            User.objects.create_superuser(username=username, email=email, password=password)
            self.stdout.write(self.style.SUCCESS(
                f"Superusuário '{username}' criado com sucesso."
            ))