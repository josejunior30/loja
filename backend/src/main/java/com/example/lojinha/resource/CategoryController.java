package com.example.lojinha.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.lojinha.DTO.CategoryDTO;
import com.example.lojinha.DTO.ProdutoDTO;
import com.example.lojinha.service.CategoryService;

@RestController
@RequestMapping(value="/category")
@CrossOrigin("http://localhost:4200")
public class CategoryController {
@Autowired
private CategoryService service;

@GetMapping
public ResponseEntity <List<CategoryDTO>> findAll(){
	List<CategoryDTO> category= service.findAll();
	return ResponseEntity.ok().body(category);

}
@CrossOrigin("http://localhost:4200")
@GetMapping("/{categoryId}/produtos")
public ResponseEntity<List<ProdutoDTO>> getAllProductsForCategory(@PathVariable Long categoryId) {
    List<ProdutoDTO> products = service.getAllProductsForCategory(categoryId);

    if (products != null) {
        return ResponseEntity.ok().body(products);
    } else {
       
        return ResponseEntity.notFound().build();
    }
}
}