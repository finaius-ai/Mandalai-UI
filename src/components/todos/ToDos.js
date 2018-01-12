import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import TodoListScreen from "./TodoListScreen";
import TodoDetailScreen from "./TodoDetailScreen";




const ToDos = StackNavigator({
    ToDo: {screen: TodoListScreen},
    ToDoDetail: {screen: TodoDetailScreen}

});

export default ToDos;