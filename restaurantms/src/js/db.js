export const SearchKeys ={
    CUSTOMERS:{
        "First Name": 'fname',
        "Middle Name": 'mname',
        "Last Name": 'lname',
        "Customer ID": 'CusID',
        "Phone Number": 'timestamp',
        "Email Address": 'emailAddress',
        "Date of birth": 'dob',
        "Address": 'address',
    }
}

export const columns = {
    CUSTOMERS: {
        fname : 'First Name',
        mname: "Middle Name",
        lname: "Last Name",
        sex: "Sex",
        phoneNumber: "Phone Number",
        emailAddress: "Email Address",
        dob: "Date of birth",
        address: "Address",
        timeStamp: "Time Stamp",
        CusID: "Customer ID [PK]"
                        }
}

export const dataType = {
    CUSTOMERS: {
        "First Name class": "nav btn btn-outline-dark",
        "Middle Name class": "nav btn btn-outline-dark",
        "Last Name class": "nav btn btn-outline-dark",
        "Sex class": "nav btn btn-outline-dark",
        "Phone Number class": "nav btn btn-outline-dark",
        "Email Address class": "nav btn btn-outline-dark",
        "Date of birth class": "nav btn btn-outline-dark",
        "Address class": "nav btn btn-outline-dark",

        "First Name id": "",
        "Middle Name id": "",
        "Last Name id": "",
        "Sex id": "",
        "Phone Number id": "",
        "Email Address id": "",
        "Date of birth id": "",
        "Address id": "",

        "First Name type": "text",
        "Middle Name type": "text",
        "Last Name type": "text",
        "Sex type": "checkbox",
        "Phone Number type": "text",
        "Email Address type": "email",
        "Date of birth type": "date",
        "Address type": "address",

        "Sex select" : true,
        "Sex select options": <><option>M</option><option>F</option><option>O</option></>
    }
}