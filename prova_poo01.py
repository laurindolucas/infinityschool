class Animal:
    def __init__(self, nome):
        self.nome = nome 
    def falar(self):
        print("este animal faz um som")
        pass

class Cachorro(Animal):
    def falar(self):
        return "o cachorro late"

class Gato(Animal):
    def falar(self):
        return "o gato mia"
    
rex = Cachorro("Rex")
luci = Gato("Luci")

print (rex.nome, rex.falar())
print(luci.nome, luci.falar())