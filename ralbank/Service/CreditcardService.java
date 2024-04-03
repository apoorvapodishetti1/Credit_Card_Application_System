package com.credit_card.ralbank.Service;

import com.credit_card.ralbank.Entity.Creditcard;
import com.credit_card.ralbank.Repository.CreditcardRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CreditcardService {

    @Autowired
    private CreditcardRepo creditcardRepo;
    public Creditcard save(Creditcard creditcard) {
        return creditcardRepo.save(creditcard);

    }

}

