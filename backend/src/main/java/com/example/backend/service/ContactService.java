package com.example.backend.service;

import com.example.backend.model.ContactModel;
import com.example.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public ContactModel saveMessage(ContactModel contactModel) {
        return contactRepository.save(contactModel);
    }

    public List<ContactModel> getAllMessages() {
        return contactRepository.findAll();
    }

    public ContactModel getMessageById(Long id) {
        return contactRepository.findById(id).orElse(null);
    }

    public ContactModel updateMessage(ContactModel contactModel) {
        if (contactRepository.existsById(contactModel.getId())) {
            return contactRepository.save(contactModel);
        }
        return null;
    }

    public void deleteMessage(Long id) {
        contactRepository.deleteById(id);
    }
}
