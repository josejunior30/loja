package com.example.lojinha.service;

import java.util.List;
import java.util.Optional;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.lojinha.DTO.ProdutoDTO;
import com.example.lojinha.entities.Produto;
import com.example.lojinha.repository.ProdutoRepository;



@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository repository;
	
	@Transactional(readOnly = true)
	public List<ProdutoDTO>findAll() {
		List<Produto> list = repository.findAll();
		return list.stream().map(x -> new ProdutoDTO(x, x.getCategories())).collect(Collectors.toList());
	}
	
	@Transactional(readOnly = true)
	public ProdutoDTO findById( Long id) {
		Optional<Produto> produto = repository.findById(id);
		Produto entity = produto.get();
		return new ProdutoDTO(entity, entity.getCategories());
	}
	@Transactional(readOnly = true)
	public List<ProdutoDTO>findAll(String name) {
		List<Produto> list = repository.buscarPorNome(name);
		return list.stream().map(x -> new ProdutoDTO(x)).collect(Collectors.toList());
	}


}
