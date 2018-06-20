package com.mylonas.diary.subject;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/subjects")
public class SubjectsController
{
   @GetMapping
   public List<Subject> get()
}
