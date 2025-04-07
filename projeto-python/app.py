from flask import Flask, render_template, request, redirect
from bcb import currency
from datetime import date

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/converter', methods=['POST'])
def converter():
    valor = float(request.form['valor'])
    moeda = request.form['moeda']
    hoje = date.today()
    try:
        taxa = currency.get(moeda, start=hoje, end=hoje).iloc[0]['value']
        convertido = round(valor / taxa, 2)
        return render_template('index.html', resultado=f"{valor} BRL = {convertido} {moeda} (cotação: {taxa})")
    except Exception as e:
        return render_template('index.html', resultado=f"Erro ao converter: {str(e)}")

@app.route('/comparacao')
def comparacao():
    return render_template('comparacao.html')

@app.route('/casas')
def casas():
    return render_template('casas.html')

@app.route('/usuario')
def usuario():
    return render_template('usuario.html')

if __name__ == '__main__':
    app.run(debug=True)
