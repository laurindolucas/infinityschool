import flet as ft

def main(page: ft.Page):
    page.title = "gerenciador de tarefas"
    tarefas = []

    def adcionar_tarefas(e):
        tarefa = nova_tarefa.value
        if tarefa:
            tarefas.append(tarefa)
            lista_tarefas.controls.append(ft.Text(tarefa))
            nova_tarefa.value = ""
            page.update()

    nova_tarefa = ft.TextField(
        label="Nova Tarefa",
        autofill_hints=ft.AutofillHint.NAME
    )
    botao_adcionar = ft.FilledButton(
        text="Adicionar nova tarefa á lista",
        on_click=adcionar_tarefas
    )
    lista_tarefas = ft.Column()
    
    page.add(
        ft.AutofillGroup(
            ft.Column(
                controls=[
                    nova_tarefa,
                    botao_adcionar,
                    lista_tarefas
                ]

            )
        )
    )
ft.app(main)