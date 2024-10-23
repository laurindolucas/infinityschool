import flet as ft 

def main(page: ft.Page):

    t = ft.Tabs(
        selected_index=1,
        animation_duration=300,
        tabs=[
            ft.Tab(
                text="Clientes",
                content=ft.Column(
                    [

                    ft.Text("NOVO CLIENTE"),
                    ft.TextField("Nome do cliente"),
                    ft.TextField("CPF do cliente"),
                    ft.TextField("Email do Cliente"),
                    ft.ElevatedButton(text="Cadastrar"),
                    ]
                ),
            ),
            ft.Tab(
                text="Quartos",
                content=ft.Column(
                    [
                    ft.Text("NOVO CLIENTE"),
                    ft.TextField("Numero do quarto"),
                    ft.TextField("capacidade"),
                    ft.TextField("valor da diaria"),
                    ft.ElevatedButton(text="Cadastrar")
                    ]
                ),   
            ),
            ft.Tab(
                text="Reservas",
                content=ft.Text("NOVA RESERVA"),
            ),
             ft.Tab(
                text="Gerenciador de Reservas",
                icon=ft.icons.SETTINGS,
                content=ft.Text("GERENCIE AS RESERVAS"),
            ),
        ],
        expand=1,
    )

    page.add(t)

ft.app(main)