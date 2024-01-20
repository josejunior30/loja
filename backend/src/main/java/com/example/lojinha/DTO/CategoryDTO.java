package com.example.lojinha.DTO;

import java.io.Serializable;

import java.util.HashSet;

import java.util.Set;

import com.example.lojinha.entities.Category;


	public class CategoryDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	public CategoryDTO() {
	
	}

	public CategoryDTO(Long id, String name) {
	super();
	this.id = id;
	this.name = name;
	}
	
	public CategoryDTO(Category entity) {
	this.id= entity.getId();
	this.name= entity.getName();
	
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



	}
