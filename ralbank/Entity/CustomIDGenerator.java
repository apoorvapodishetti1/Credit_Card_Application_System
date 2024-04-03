package com.credit_card.ralbank.Entity;

import jakarta.persistence.SequenceGenerator;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CustomIDGenerator implements IdentifierGenerator {

    private static final String PREFIX = "ID";

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object obj) {
        String prefix = PREFIX + LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddHHmmss"));
        return prefix;
    }
}
