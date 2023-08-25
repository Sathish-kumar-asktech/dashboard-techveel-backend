SELECT
    se.AdmissionId ,
    se.AdmissionNo ,    
    se.CreatedDate as AdmissionDate,

    -- basic information
    se.FirstName,
    se.LastName,
    se.FatherName,
    se.Dob,
    se.Gender,
    se.GraduationType,
    se.PhoneNumber,
    se.Email,
    
    -- education details
    clg.CollegeName,     
    d.DegreeName,
    se.SslcPer,
    se.SslcPassedout,
    se.HscPer,
    se.HscPassedout,
    se.UGPer,
    se.UGPassedOut,
    se.PGPer,
    se.PGPassedOut,
    
    -- address information
    se.Address1,
    se.Address2,
    cm.CityName,
    sm.StateName,
    se.ZipCode,
    
    -- documents
    se.doc1,
    se.doc2,
    se.doc3,
    se.doc4,
    
    -- other details
    se.PerferenceMode,
    se.PerferenceDay,
    se.PerferenceTiming,
    se.CourseId,
    ct.Course_Name, 
    se.CourseTechnologyId,
    tech.Course_Category, 
    se.WorkingStatus,
    se.WorkingIndustry,
    se.WorkingCompany,
    se.ReferenceBy,
    se.ReferenceContactNumber,
    se.CreatedDate,
    se.DiscountAmount,    
    ct.Course_Fee,
    se.NetAmount,    
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

where  convert (Varchar(10), se.CreatedDate,112) between @FromDate and @ToDate  order by se.AdmissionId desc