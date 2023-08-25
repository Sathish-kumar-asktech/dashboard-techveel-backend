SELECT
    se.Admissionid,
    adm.FirstName,
    adm.LastName,
    adm.CourseId,
    ct.Course_Name,
    ct.Course_Fee,
    adm.NetAmount,
    tech.Course_Category,
    SUM(se.PaidAmount) AS TotalPaidAmount,
    MAX(se.CreatedDate) AS LastPaymentDate
FROM
    TblStudentPayment se    
    LEFT JOIN TblStudentAdmission adm ON se.Admissionid = adm.AdmissionId
    LEFT JOIN tblcoursemst ct ON adm.CourseTechnologyId = ct.CourseId
    LEFT JOIN TblCourseCategoryMst tech ON adm.CourseId = tech.CourseCategoryId
WHERE
    se.Admissionid = @Admissionid
GROUP BY
    se.Admissionid,
    adm.FirstName,
    adm.LastName,
    adm.CourseId,
    ct.Course_Name,
    ct.Course_Fee,
    adm.NetAmount,
    tech.Course_Category
ORDER BY
    se.Admissionid DESC;

