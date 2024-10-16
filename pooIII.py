# class Biblioteca:
#     def __init__(self,nome):
#         self.nome = nome
#         self.livros = []
# class Livro:
#     def __init__(self, titulo):
#         self.titulo = titulo
#         self.biblioteca = None 

# central = Biblioteca("Biblioteca central")
# livro1 = Livro("As aventuras na floresta")
# central.livros.append(livro1)

# pri


# ##exercicio 02 
# class Cliete:
#     def __init__(self, nome, cpf):
#         self.nome = nome
#         self.cpf = cpf
#         self.pedidos = []

# class Pedidos:
#     def __init__(self, produto, valor, quantidade):
#         self.produto = produto
#         self.valor = valor 
#         self.quantidade = quantidade
#         self.cliente = None

# cliente1 = Cliete("jose", 12345678)
# pedido1 = Pedidos("Air force", "RS450,00", 1)
# pedido1.cliente = cliente1
# cliente1.pedidos.append(pedido1)
# ## falta fazer a parte dos prints.

class Livro:
    def __init__(self, titulo, autor):
        self.__titulo = titulo
        self.__autor = autor

    def get__titulo(self):
        return self.__titulo
    def get__autor(self):
        return self.__autor

class Usuario:
    def __init__(self, nome, id):
        self.__nome = nome
        self.__id = nome
    def get__nome(self):
        return self.__nome
    def set__nome(self, novo_nome):
        if novo_nome:
            self.__nome = novo_nome
    def get__id(self):
        return self.__id
    def set__id(self, novo_id):
        if novo_id:
            self.__id = novo_id
            
         



        
