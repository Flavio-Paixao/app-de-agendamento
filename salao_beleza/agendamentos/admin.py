from django.contrib import admin
from .models import Servico, Cliente, Agendamento
from django.utils.html import format_html
import urllib.parse

@admin.register(Agendamento)
class AgendamentoAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'servico', 'data_hora', 'botao_whatsapp')

    def botao_whatsapp(self, obj):
        if obj.cliente.telefone:
            # Formata a data para ficar bonita (Ex: 15/10/2023 14:30)
            data_formatada = obj.data_hora.strftime('%d/%m/%Y às %H:%M')
            
            # Mensagem personalizada
            texto = (
                f"Olá {obj.cliente.nome}! ✨\n"
                f"Confirmamos seu horário para *{obj.servico.nome}*.\n"
                f"📅 Data: {data_formatada}\n"
                f"💰 Valor: R$ {obj.servico.preco}\n"
                f"Podemos confirmar?"
            )
            
            # Codifica o texto para formato de URL
            texto_url = urllib.parse.quote(texto)
            link = f"https://wa.me/{obj.cliente.telefone}?text={texto_url}"
            
            return format_html('<a href="{}" target="_blank" style="padding: 5px 10px; background-color: #25D366; color: white; border-radius: 5px; text-decoration: none;">Enviar Zap</a>', link)
        return "Sem telefone"

    botao_whatsapp.short_description = 'WhatsApp'

# Registre os outros se ainda não estiverem
admin.site.register(Servico)
admin.site.register(Cliente)