SELECT
    se.AdmissionId ,
    se.AdmissionNo ,

    -- basic information
    se.FirstName,
    se.LastName,
    se.FatherName,
    se.PhoneNumber,
    se.Email,
            
    -- other details
    se.PerferenceMode,
    se.PerferenceDay,
    se.PerferenceTiming,
    se.CourseId,
    ct.Course_Name,
    ct.Course_Fee, 
    se.CourseTechnologyId,
    tech.Course_Category, 
    se.CreatedDate,
    se.DiscountAmount,
    se.NetAmount  
FROM
    TblStudentAdmission se
    LEFT JOIN tblcoursemst ct ON se.CourseTechnologyId = ct.CourseId
    LEFT JOIN TblCourseCategoryMst tech ON se.CourseId = tech.CourseCategoryId

where AdmissionId=@AdmissionId