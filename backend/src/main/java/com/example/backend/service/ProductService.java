package com.example.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.ProductModel;
import com.example.backend.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public ProductModel saveProduct(ProductModel productModel) {
        return productRepository.save(productModel);
    }

    public List<ProductModel> getAllProducts() {
        return productRepository.findAll();
    }

    public ProductModel getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public ProductModel updateProduct(Long id, ProductModel productModel) {
        Optional<ProductModel> existingProductOpt = productRepository.findById(id);
        if (existingProductOpt.isPresent()) {
            ProductModel existingProduct = existingProductOpt.get();
            existingProduct.setName(productModel.getName());
            existingProduct.setPrice(productModel.getPrice());
            existingProduct.setDescription(productModel.getDescription());
            existingProduct.setColor(productModel.getColor());
            existingProduct.setCategory(productModel.getCategory());
            return productRepository.save(existingProduct);
        } else {
            return null;
        }
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}