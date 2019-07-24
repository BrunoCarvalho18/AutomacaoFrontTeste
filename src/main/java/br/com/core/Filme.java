package br.com.core;

import java.util.List;

//Classe Diretor Criando o Construtor do Filme e criando os Gets e Sets do Nome e Ano de Lançamento
public class Filme {
	private List<String> nome;
	private List<String> anoDeLancamento;

	public void addFilme(String nome, String anoDeLancamento) {
		this.nome.add(nome);
		this.anoDeLancamento.add(anoDeLancamento);
	}

	public List<String> getNome() {
		return this.nome;
	}

	public List<String> getAnoDeLancamento() {
		return this.anoDeLancamento;
	}

}
