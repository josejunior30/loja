package com.example.lojinha.service;

import java.util.Collections;
import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.lojinha.DTO.CategoryDTO;
import com.example.lojinha.DTO.ProdutoDTO;
import com.example.lojinha.entities.Category;
import com.example.lojinha.repository.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository repository;
	
	@Transactional(readOnly = true)
	public List<CategoryDTO>findAll() {
		List<Category> list = repository.findAll();
		return list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
	}
	@Transactional(readOnly = true)
	public List<ProdutoDTO> getAllProductsForCategory(Long categoryId) {
	    Category category = repository.findById(categoryId).orElse(null);

	    if (category != null) {
	        return category.getProduto().stream()
	                .map(produto -> new ProdutoDTO(produto, produto.getCategories()))
	                .collect(Collectors.toList());
	    } else {
	        // Trate o caso em que a categoria não existe
	        return Collections.emptyList(); // ou null, dependendo do seu tratamento
	    }
	}

	
}
