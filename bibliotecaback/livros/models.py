from django.db import models
from django.contrib.auth.models import User

class Livro(models.Model):
    titulo = models.CharField(max_length=200)
    autor = models.CharField(max_length=200)
    resumo = models.TextField()
    preco = models.DecimalField(max_digits=6, decimal_places=2)
    capa = models.ImageField(upload_to='covers/', blank=True, null=True)
    # ImageField é o campo para arquivos de imagem.
    # 'upload_to' diz ao Django para salvar os arquivos em uma subpasta 'covers'
    # dentro do nosso diretório de mídia principal.
    # 'blank=True, null=True' torna este campo opcional. Isso é VITAL
    # para que nossos livros já existentes não causem um erro.


    def __str__(self):
        return self.titulo
    
#Criamos uma classe Livro que herda de models.Model. 
# Cada atributo (titulo, autor, etc.) representa uma coluna na nossa tabela do banco de dados. 
# O método __str__ é apenas uma representação amigável do objeto, útil na área administrativa do Django.    

class Feedback(models.Model):
    #Relacionamento com Livro: Se um livro for deletado, todos os seus feedbacks também serão.
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE, related_name='feedbacks')
    #Relacionamento com User. Se um usuário for deletado, o feedback também será.
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    #Nota limitada de 1 a 5
    nota = models.PositiveIntegerField()
    #Comentário em texto
    comentario = models.TextField()
    #Data e hora que o feedback foi feito, preenchendo automaticamente.
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Feedback de {self.usuario.username} para "{self.livro.titulo}"'

