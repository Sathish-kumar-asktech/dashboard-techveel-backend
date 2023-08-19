SELECT
    AdmissionId ,
    AdmissionNo ,
    CreatedDate,
    -- basic information
    FirstName,
    LastName
FROM
    TblStudentAdmission

where AdmissionId not in (select AdmissionId from TblStudentPayment)
