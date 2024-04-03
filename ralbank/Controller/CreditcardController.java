package com.credit_card.ralbank.Controller;
import com.credit_card.ralbank.Entity.Creditcard;
import com.credit_card.ralbank.Repository.CreditcardRepo;
import com.credit_card.ralbank.Service.CreditcardService;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
//main purpose of controller is defining path an operations//

@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin("*")
@RequestMapping("/creditcard")
@RestController
public class CreditcardController {
    @Autowired
    private CreditcardService creditcardService;


    @PostMapping("/applyCreditcard")
    public Creditcard post(@RequestBody Creditcard creditcard) {
        return creditcardService.save(creditcard);
    }


    @GetMapping("/creditcard")
    @ResponseStatus(HttpStatus.OK) // Set the desired HTTP status code
    public String getStatus() {
        return "Success";
    }





}