package com.example.lojinha.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.lojinha.entities.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	@Query(value= "select u from Produto u where upper(trim(u.name)) like %?1%")
	List<Produto> buscarPorNome(@Param("name")String name);

	
}
 