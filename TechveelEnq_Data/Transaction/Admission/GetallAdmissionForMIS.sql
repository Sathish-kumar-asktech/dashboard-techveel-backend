SELECT
    se.AdmissionId ,
    se.AdmissionNo ,
    se.CreatedDate as AdmissionDate,

    -- basic information
    se.FirstName,
    se.LastName,

    -- documents
    se.doc1 as profilePhoto,

    se.PhoneNumber,
    se.Email,
    se.Gender,
    se.Dob,

    
    se.CourseTechnologyId,
    tech.Course_Category, 
    se.CourseId,
    ct.Course_Name, 

    
    cm.CityName,
    sm.StateName,

    -- education details
    se.GraduationType,
    clg.CollegeName,     
    d.DegreeName,
    se.UGPer,
    se.UGPassedOut,
    se.PGPer,
    se.PGPassedOut,
        
    -- other details
    se.PerferenceMode,
    se.PerferenceDay,
    se.PerferenceTiming,    
    se.ReferenceBy,
    se.ReferenceContactNumber,
    
    ct.Course_Fee,
    se.DiscountAmount,
    se.NetAmount,  

    se.WorkingStatus,

    se.EnquiryId,
    enq.CreatedDate as EnquiryDate
FROM
    TblStudentAdmission se
    LEFT JOIN tblcitymst cm ON se.CityId = cm.CityId
    LEFT JOIN tblstatemst sm ON se.StateId  = sm.StateId 
    LEFT JOIN TblCollegeMst clg ON se.CollegeId = clg.CollegeId
    LEFT JOIN tbldegreemst d ON se.DegreeId = d.DegreeId
    LEFT JOIN tblcoursemst ct ON se.CourseTechnologyId = ct.CourseId
    LEFT JOIN TblCourseCategoryMst tech ON se.CourseId = tech.CourseCategoryId    
    LEFT JOIN TblStudentEnquiry enq ON se.EnquiryId = enq.EnquiryId

order by se.AdmissionId desc;