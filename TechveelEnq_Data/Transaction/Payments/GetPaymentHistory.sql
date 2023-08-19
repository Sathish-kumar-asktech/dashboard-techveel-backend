SELECT
    se.PaymentId,
    se.Admissionid,
    se.PayType,
    se.PayMode,
    se.PaymentDate,
    se.PaidAmount,
    se.Remarks,
    se.prevBalance,
    se.BalanceOnDate,        
    SUM(se.PaidAmount) OVER (PARTITION BY se.Admissionid) AS TotalPaidAmount,

    adm.FirstName,
    adm.LastName,

    adm.CourseId,
    ct.Course_Name,
    ct.Course_Fee,
    adm.NetAmount,
    adm.CourseTechnologyId,
    tech.Course_Category,
    se.CreatedDate
FROM
    TblStudentPayment se    
    LEFT JOIN TblStudentAdmission adm ON se.Admissionid = adm.AdmissionId
    LEFT JOIN tblcoursemst ct ON adm.CourseTechnologyId = ct.CourseId
    LEFT JOIN TblCourseCategoryMst tech ON adm.CourseId = tech.CourseCategoryId

WHERE se.Admissionid = @Admissionid order by se.PaymentId desc