class ContaBancaria:
    def __init__(self, titular):
        self.__titular = titular
        self.__saldo = 0.0
    
    @property
    def saldo(self):
        return self.__saldo
    @property
    def nome(self):
        return self.__titular
   
    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor
            print(f"Depósito de R${valor:.2f} realizado com sucesso")
        else:
            print("Valor de dpósito inválido")
    
    def sacar(self, valor):
        if 0 < valor <= self.__saldo:
            self.__saldo -= valor
            print(f"Saque de R${valor:.2f} realizado com sucesso")
        else:
            print("Saldo insuficiente ou valor de saque inválido")
    def exibir_saldo(self):
        print(f"Saldo atual: R${self.saldo:.2f}")

conta = ContaBancaria(titular ="caio")

while True:
    opcao = input("Escolha uma opção: [d]epositar, [s]acar, [e]xibvir saldo,[q]uitar: ")
    if opcao == 'd':
        valor = float(input("Digite o valor do dpósito: "))
        conta.depositar(valor)
    elif opcao == 's':
        valor = float(input("Digite o valor par saque: "))
    elif opcao == 'e':
        conta.exibir_saldo()
    elif opcao == 'q':
        print("Encerrando operações")
        break
    else:
        print("Opção inválida. Tente novamente")


