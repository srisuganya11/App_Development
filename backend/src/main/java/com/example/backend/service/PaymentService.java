package com.example.backend.service;

import com.example.backend.model.PaymentModel;
import com.example.backend.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public PaymentModel savePayment(PaymentModel paymentModel) {
        return paymentRepository.save(paymentModel);
    }

    public List<PaymentModel> getAllPayments() {
        return paymentRepository.findAll();
    }

    public PaymentModel getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }
    public PaymentModel updatePayment(Long id, PaymentModel paymentModel) {
        Optional<PaymentModel> existingPaymentOpt = paymentRepository.findById(id);
        if (existingPaymentOpt.isPresent()) {
            PaymentModel existingPayment = existingPaymentOpt.get();
            existingPayment.setCardNumber(paymentModel.getcardNumber());
            existingPayment.setCardName(paymentModel.getcardName());
            existingPayment.setCvv(paymentModel.getcvv());
            existingPayment.setExpiryDate(paymentModel.getexpiryDate());
            return paymentRepository.save(existingPayment);
        } else {
            return null;
        }
    }

    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
    
}