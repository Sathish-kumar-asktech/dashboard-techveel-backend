SELECT
    se.PaymentId,    
    se.Admissionid,
    se.PaymentId+1 AS PaymentNo,    
    se.PaymentDate as PaymentDate,    
    se.CreatedDate as CreatedDate,
	se.PayType,
    se.PayMode,    
    adm.FirstName,
    adm.LastName,    
    ct.Course_Name,
    tech.Course_Category,
    adm.NetAmount as CourseFee,    
	ct.Course_Duration,
    se.PaidAmount,    
    se.Remarks
FROM
    TblStudentPayment se    
    LEFT JOIN TblStudentAdmission adm ON se.Admissionid = adm.AdmissionId
    LEFT JOIN tblcoursemst ct ON adm.CourseTechnologyId = ct.CourseId
    LEFT JOIN TblCourseCategoryMst tech ON adm.CourseId = tech.CourseCategoryId

where  PaymentId = @PaymentId
