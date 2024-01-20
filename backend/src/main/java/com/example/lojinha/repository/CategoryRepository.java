package com.example.lojinha.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.lojinha.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
