package com.credit_card.ralbank.Repository;
import com.credit_card.ralbank.Entity.Creditcard;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CreditcardRepo extends JpaRepository<Creditcard, Long> {

}


