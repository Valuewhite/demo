package com.wsll.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    // 定义一个访问路径为 "/hello" 的接口
    @GetMapping("/hello")
    public String sayHello() {
        return "你好，这是我的 Spring Boot 项目！";
    }
}