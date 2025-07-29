from django.contrib.auth.models import User
from rest_framework import serializers

"""Um serializador para o modelo de Usuário.
    Ele é usado para validar e criar novos usuários."""

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        # Define os campos que serão expostos pela API.
        # 'password' é write_only, ou seja, pode ser enviado para o servidor,
        # mas nunca será mostrado em respostas da API.

    def create(self, validated_data):
        """
        Este método é chamado quando um novo usuário é criado (ex: no registro).
        Ele sobrescreve o método padrão para garantir que a senha seja
        corretamente "hasheada" (criptografada) antes de ser salva.
        """       

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user
         # Usa o método create_user do modelo User, que cuida do hashing da senha