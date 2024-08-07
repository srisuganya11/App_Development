package com.example.backend.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.ProductModel;

public interface ProductRepository extends JpaRepository<ProductModel, Long> {

}