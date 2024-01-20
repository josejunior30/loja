package com.example.lojinha.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.lojinha.DTO.ProdutoDTO;
import com.example.lojinha.service.ProdutoService;



@RestController
@RequestMapping(value="/produtos")
@CrossOrigin("http://localhost:4200")
public class ProdutoController {
	@Autowired
	private ProdutoService service;
	
	@GetMapping
	public ResponseEntity <List<ProdutoDTO>> findAll(){
		List<ProdutoDTO> product= service.findAll();
		return ResponseEntity.ok().body(product);

}
	@GetMapping(value="/{id}")
	public ResponseEntity<ProdutoDTO> findById(@PathVariable Long id){
		ProdutoDTO product = service.findById(id);
		return ResponseEntity.ok().body(product);
	}
	@CrossOrigin("http://localhost:4200")
	@GetMapping(value="/buscarPorNome")
	public ResponseEntity <List<ProdutoDTO>> findAll(@RequestParam(name ="name") String name){
		List<ProdutoDTO> product= service.findAll(name.trim().toUpperCase());
		return ResponseEntity.ok().body(product);
}
	 
}