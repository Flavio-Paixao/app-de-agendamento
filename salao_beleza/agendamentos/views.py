from django.shortcuts import render
from .models import Servico, Cliente, Agendamento
from django.contrib.auth.decorators import login_required

def index(request):
    sucesso = False
    if request.method == "POST":
        nome_cliente = request.POST.get('nome')
        telefone_cliente = request.POST.get('telefone')
        servico_id = request.POST.get('servico')
        data_escolhida = request.POST.get('data_hora') 

        cliente, created = Cliente.objects.get_or_create(
            nome=nome_cliente,
            defaults={'telefone': telefone_cliente}
        )
        
        servico = Servico.objects.get(id=servico_id)
        
        Agendamento.objects.create(
            cliente=cliente,
            servico=servico,
            data_hora=data_escolhida 
        )
        sucesso = True

    # Esta linha abaixo TEM QUE ESTAR alinhada com o "if" acima
    servicos = Servico.objects.all()
    return render(request, 'agendamentos/index.html', {
        'servicos': servicos, 
        'sucesso': sucesso
    })

# A função agenda TEM QUE FICAR encostada na margem esquerda
@login_required
def agenda(request):
    agendamentos = Agendamento.objects.all().order_by('data_hora')
    return render(request, 'agendamentos/agenda.html', {'agendamentos': agendamentos})