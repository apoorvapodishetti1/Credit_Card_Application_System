package com.credit_card.ralbank.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.jetbrains.annotations.NotNull;

@Data
@NoArgsConstructor
@Entity
@Table(name="application_details")

public class Creditcard {
    @Id
    @GeneratedValue(generator = "customIdGenerator")
    @GenericGenerator(name = "customIdGenerator", strategy = "com.credit_card.ralbank.Entity.CustomIDGenerator")
    @Column(name = "APPLICATIONID", length = 30)
    private String applicationid;


    @NotNull
    @Column(name = "FIRSTNAME", length = 15)
    private String firstName;

    @NotNull
    @Column(name = "LASTNAME",length = 15)
    private String lastName;

    @NotNull
    @Column(name = "GENDER",length = 10)
    private String gender;

    @NotNull
    @Column(name = "DOB",length = 30)
    private String dob;

    @NotNull
    @Column(name = "PHONENUMBER", length = 10)
    private Long phoneNumber;


    @NotNull
    @Column(name = "ITIN",length = 10)
    private Long itin;

    @NotNull
    @Column(name = "EMAILID",length = 50)
    private String emailID;

    @NotNull
    @Column(name = "FATHERNAME",length = 30)
    private String fatherName;

    @NotNull
    @Column(name = "MOTHERNAME",length = 30)
    private String motherName;

    @NotNull
    @Column(name = "OCCUPATION",length = 20)
    private String occupation;

    @NotNull
    @Column(name = "ADDRESS",length = 50)
    private String address;

    @NotNull
    @Column(name = "CITY",length = 30)
    private String city;

    @NotNull
    @Column(name = "PINCODE",length = 20)
    private String pincode;

    @NotNull
    @Column(name = "LANDMARK",length = 50)
    private String landmark;

    @NotNull
    @Column(name = "MARITALSTATUS",length = 20)
    private String marital_status;

    @NotNull
    @Column(name = "RESIDENTIALSTATUS",length = 20)
    private String residentialStatus;

    @NotNull
    @Column(name = "COMPANYNAME",length = 60)
    private String  companyName;

    @NotNull
    @Column(name = "COMPANYADDRESS",length = 60)
    private String companyAddress;

    @NotNull
    @Column(name = "GROSSINCOMEMONTHLY",length = 20)
    private int grossIncomeMonthly;


    @NotNull
    @Column(name = "CREDIT_SCORE",length = 5)
    private int credit_score;

    @NotNull
    @Column(name = "LIABILITIES",length = 10)
    private String liabilities;

    @NotNull
    @Column(name = "SIGN",length = 30)
    private String sign;

    @NotNull
    @Column(name="CARD_TYPE",length = 30)
    private String card_type;

    public String getApplicationid() {
        return applicationid;
    }

    public void setApplicationid(String applicationid) {
        this.applicationid = applicationid;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Long getItin() {
        return itin;
    }

    public void setItin(Long itin) {
        this.itin = itin;
    }

    public String getEmailID() {
        return emailID;
    }

    public void setEmailID(String emailID) {
        this.emailID = emailID;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public String getLandmark() {
        return landmark;
    }

    public void setLandmark(String landmark) {
        this.landmark = landmark;
    }

    public String getMarital_status() {
        return marital_status;
    }

    public void setMarital_status(String marital_status) {
        this.marital_status = marital_status;
    }

    public String getResidentialStatus() {
        return residentialStatus;
    }

    public void setResidentialStatus(String residentialStatus) {
        this.residentialStatus = residentialStatus;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanyAddress() {
        return companyAddress;
    }

    public void setCompanyAddress(String companyAddress) {
        this.companyAddress = companyAddress;
    }

    public int getGrossIncomeMonthly() {
        return grossIncomeMonthly;
    }

    public void setGrossIncomeMonthly(int grossIncomeMonthly) {
        this.grossIncomeMonthly = grossIncomeMonthly;
    }

    public int getCredit_score() {
        return credit_score;
    }

    public void setCredit_score(int credit_score) {
        this.credit_score = credit_score;
    }

    public String getLiabilities() {
        return liabilities;
    }

    public void setLiabilities(String liabilities) {
        this.liabilities = liabilities;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public String getCard_type() {
        return card_type;
    }

    public void setCard_type(String card_type) {
        this.card_type = card_type;
    }

    public Creditcard(@NotNull String id, String applicationid, @NotNull String firstName, @NotNull String lastName, @NotNull String gender, @NotNull String dob, @NotNull Long phoneNumber, @NotNull Long itin, @NotNull String emailID, @NotNull String fatherName, @NotNull String motherName, @NotNull String occupation, @NotNull String address, @NotNull String city, @NotNull String pincode, @NotNull String landmark, @NotNull String marital_status, @NotNull String residentialStatus, @NotNull String companyName, @NotNull String companyAddress, @NotNull int grossIncomeMonthly, int credit_score, String liabilities, String sign, String card_type) {

        this.applicationid = applicationid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.itin = itin;
        this.emailID = emailID;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.occupation = occupation;
        this.address = address;
        this.city = city;
        this.pincode = pincode;
        this.landmark = landmark;
        this.marital_status = marital_status;
        this.residentialStatus = residentialStatus;
        this.companyName = companyName;
        this.companyAddress = companyAddress;
        this.grossIncomeMonthly = grossIncomeMonthly;
        this.credit_score = credit_score;
        this.liabilities = liabilities;
        this.sign = sign;
        this.card_type = card_type;
    }
}

