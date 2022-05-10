import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";


/*selector: "app-course-list",*/ //Quando o componente é chamado pelo método de rotas não é necessário ter o selector.
@Component({
    templateUrl: "./course-list.component.html"
})

export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    constructor(private courseService: CourseService){}

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }
}
