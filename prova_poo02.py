class Veiculo:
    def movimentar():
        print("esse veiculo esta em movimento")

class Carro(Veiculo):
    def movimentar():
        return "Carro esta dirigindo"
    
class Moto(Veiculo):
    def movimentar():
        return "Moto está acelerando"

print ("O", Carro.movimentar() )
print("A", Moto.movimentar())