package com.example.lojinha.DTO;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.example.lojinha.entities.Category;
import com.example.lojinha.entities.Produto;




public class ProdutoDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Double price;
	private String description;
	private String imUrl;
	private Integer quantities;
	
	private Set<CategoryDTO> categories = new HashSet<>();
	
	public ProdutoDTO() {
		
	}
	
	public ProdutoDTO(Long id, String name, Double price, String description, String imUrl, Integer quantities) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.description = description;
		this.imUrl = imUrl;
		this.quantities = quantities;
		
	}

	public ProdutoDTO(Produto entity) {
		this.id= entity.getId();
		this.name= entity.getName();
		this.price= entity.getPrice();
		this.description= entity.getDescription();
		this.imUrl= entity.getImUrl();
		this.quantities= entity.getQuantities();
		
	}
	
	public ProdutoDTO(Produto entity, Set<Category>categories) {
		this(entity);
		categories.forEach(cat-> this.categories.add(new CategoryDTO(cat)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImUrl() {
		return imUrl;
	}

	public void setImUrl(String imUrl) {
		this.imUrl = imUrl;
	}
	
	

	public Integer getQuantities() {
		return quantities;
	}

	public void setQuantities(Integer quantities) {
		this.quantities = quantities;
	}

	public Set<CategoryDTO> getCategories() {
		return categories;
	}
	
}