SELECT
    se.PaymentId,
	se.CreatedDate as PaymentDate,
    se.Admissionid,
	adm.FirstName,
    adm.LastName,
    tech.Course_Category,
	ct.Course_Name,
    ct.Course_Fee,
    ct.CourseId,
    adm.NetAmount as OfferedFee,
    SUM(se.PaidAmount) OVER (PARTITION BY se.Admissionid) AS TotalPaidAmount,
    adm.NetAmount - SUM(se.PaidAmount) OVER (PARTITION BY se.Admissionid) AS BalanceFee,
    se.PayType,
    se.PayMode,
    se.PaidAmount,
	se.BalanceOnDate,        
    se.Remarks,
    se.prevBalance

FROM
    TblStudentPayment se    
    LEFT JOIN TblStudentAdmission adm ON se.Admissionid = adm.AdmissionId
    LEFT JOIN tblcoursemst ct ON adm.CourseTechnologyId = ct.CourseId
    LEFT JOIN TblCourseCategoryMst tech ON adm.CourseId = tech.CourseCategoryId
order by se.PaymentId desc