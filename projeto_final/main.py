class Produto:
    def __init__(self, id_produto, nome, descricao, qntd_disponivel, preco):
        self.id_produto = id_produto
        self.nome = nome
        self.descricao =  descricao
        self.qntd_disponivel = qntd_disponivel
        self.preco = preco     

class Gerenciador:
    def __init__(self):
        self.produtos = []

    def criar_produto(self):
        id_produto = int(input("Crie o ID do produto: "))
        nome = input("Informe o nome do produto: ")
        descricao = input("Faça uma descrição do produto: ")
        preco = float(input("Digite o valor do produto: R$"))
        qntd_disponivel = int(input("Informe a quantidade dos produtos para estoque: "))
        novo_produto = Produto(id_produto, nome, descricao, qntd_disponivel, preco)
        self.produtos.append(novo_produto)
        print(f"Produto {nome} adcionado com sucesso")

    def editar_produto(self):
        nome = input("Digite o nome do produto que você deseja editar: ")
        for produto in self.produtos:
            if produto.nome == nome:
                print ("O QUE VOCÊ DESEJA EDITAR? ")
                print ("[1]- Editar preço do produto")
                print ("[2]- Editar quatidade do produto")
                print ("[3]- Editar descriçaõ do produto")
                escolha = int(input("Informe o número correspondente ao que você quer editar: "))
                if escolha == 1:
                    novo_preco = float(input(f"Informe o novo preço do produto {nome}: "))
                    produto.preco = novo_preco
                    print(f"produto {nome}, teve o preço atualizado com sucesso")
                elif escolha == 2:
                    nova_qntd = int(input(f"Informe a nova quantidade do produto {nome}"))
                    produto.qntd_disponivel = nova_qntd
                    print(f"produto {nome}, teve sua quantidade atualizada")
                elif escolha == 3:
                    nova_descricao = input(f"Informe a nova descrição do produto {nome}")
                    produto.descricao = nova_descricao
                    print(f"o produto {nome}, teve sua descrição atualizada")
                else:
                    print("escolha inválida") 
            return
        print("produto não encontrado")   
            
    def listar_produto():
        

    def remover_produto():



class Venda:
    def __init__(self, id_venda, id_produto, qntd_vendida, data_venda):
        self.id_venda = id_venda
        self.id_produto =  id_produto
        self.qntd_vendida = qntd_vendida
        self.data_venda = data_venda

def menu_produtos():
    gerenciador_produto = Gerenciador()
    while True:
        print("\nMenu:")
        print("[1]- Adicionar pedido")
        print("[2]- Listar produtos")
        print("[3]- Editar produtos")
        print("[4]- Remover produtos")
        print("[5]- Sair")
        opcao = input("Escolha uma opção: ")

        if opcao == 1:
            gerenciador_produto.criar_produto()
        elif opcao == 2:
            gerenciador_produto.listar_produto()
        elif opcao == 3:
            gerenciador_produto.editar_produto()
        elif opcao == 4:
            gerenciador_produto.remover_produto()
        elif opcao == 5:
            break
        else:
            print("Opção inválida. Tente novamente ")





    
    
    
