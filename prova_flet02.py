import flet as ft

def main(page: ft.Page):
    page.title = "formulários"
    def enviar_formulario(e):
        dialog = ft.AlertDialog(
        title=ft.Text("Sucesso!"),
        content=ft.Text("Formulário enviado com sucesso!"),
        actions=[ft.FilledButton("OK", on_click=lambda e: dialog.close())],
        )
        page.dialog =dialog 
        dialog.open = True 
        page.update()

    page.add(
        ft.AutofillGroup(
            ft.Column(
                controls=[
                    ft.TextField(
                        label="Nome",
                        autofill_hints=ft.AutofillHint.NAME,
                    ),
                    ft.TextField(
                        label="Email",
                        autofill_hints=[ft.AutofillHint.EMAIL],
                    ),
                    ft.TextField(
                        label="Mensagem",
                        autofill_hints=ft.AutofillHint.POSTAL_CODE
                    ),
                    ft.FilledButton(
                        text="Enviar",
                        on_click=enviar_formulario
                    ),

                ]
            )
        )
    )

ft.app(target=main)


