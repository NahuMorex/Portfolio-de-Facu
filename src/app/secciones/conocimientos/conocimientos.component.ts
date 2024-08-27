import { Component } from '@angular/core';

@Component({
  selector: 'app-conocimientos',
  standalone: true,
  imports: [],
  templateUrl: './conocimientos.component.html',
  styleUrl: './conocimientos.component.css'
})
export class ConocimientosComponent {



  conocimientos = [
    {
      titulo: "Python",
      svg: "assets/svgs/python-svgrepo-com.svg",
      color: "#1565A7",
      porcentaje: "p70"
    },
    {
      titulo: "Java",
      svg: "assets/svgs/java-4-logo-svgrepo-com.svg",
      color: "#e76f00",
      porcentaje: "p70"
    },
    {
      titulo: "Spring Boot",
      svg: "assets/svgs/spring-svgrepo-com.svg",
      color: "#70AD51",
      porcentaje: "p60"
    },
    {
      titulo: "Angular",
      svg: "assets/svgs/angular-svgrepo-com.svg",
      color: "#C3002F",
      porcentaje: "p60"
    },
    {
      titulo: "TypeScript",
      svg: "assets/svgs/typescript-svgrepo-com.svg",
      color: "#3178c6",
      porcentaje: "p60"
    },
    {
      titulo: "Bootstrap",
      svg: "assets/svgs/bootstrap-fill-svgrepo-com.svg",
      color: "#563D7C",
      porcentaje: "p75"
    },
    {
      titulo: "HTML",
      svg: "assets/svgs/html-5-svgrepo-com.svg",
      color: "#E44D26",
      porcentaje: "p80"
    },
    {
      titulo: "CSS",
      svg: "assets/svgs/css-3-svgrepo-com.svg",
      color: "#33AADD",
      porcentaje: "p75"
    },
    {
      titulo: "JavaScript",
      svg: "assets/svgs/js-svgrepo-com.svg",
      color: "#FFCA28",
      porcentaje: "p60"
    },
    {
      titulo: "NodeJS",
      svg: "assets/svgs/node-js-svgrepo-com.svg",
      color: "#8CC84B",
      porcentaje: "p30"
    },
    {
      titulo: "C++",
      svg: "assets/svgs/cpp-svgrepo-com.svg",
      color: "#00599C",
      porcentaje: "p45"
    },
    {
      titulo: "MySQL",
      svg: "assets/svgs/mysql-logo-svgrepo-com.svg",
      color: "#5d87a1",
      porcentaje: "p70"
    },
    {
      titulo: "PostgreSQL",
      svg: "assets/svgs/postgresql-logo-svgrepo-com.svg",
      color: "#336791",
      porcentaje: "p50"
    },
    {
      titulo: "Docker",
      svg: "assets/svgs/docker-svgrepo-com.svg",
      color: "#1794D4",
      porcentaje: "p30"
    },
    {
      titulo: "Postman",
      svg: "assets/svgs/postman-icon-svgrepo-com.svg",
      color: "#FF6C37",
      porcentaje: "p60"
    },
    {
      titulo: "Insomnia",
      svg: "assets/svgs/insomnia-svgrepo-com.svg",
      color: "#4000BF",
      porcentaje: "p50"
    },
    {
      titulo: "IntelliJ IDEA",
      svg: "assets/svgs/jb-intellij-idea-svgrepo-com.svg",
      color: "#e76f00",
      porcentaje: "p0"
    },
    {
      titulo: "PyCharm",
      svg: "assets/svgs/jb-pycharm-svgrepo-com.svg",
      color: "#e76f00",
      porcentaje: "p0"
    },
    {
      titulo: "Visual Studio Code",
      svg: "assets/svgs/vs-code-svgrepo-com.svg",
      color: "#2B9FED",
      porcentaje: "p0"
    },

  ]

}
