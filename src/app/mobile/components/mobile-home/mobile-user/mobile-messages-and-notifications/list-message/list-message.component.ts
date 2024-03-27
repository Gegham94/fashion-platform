import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'gb-list-message',
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.scss',
})
export class ListMessageComponent {
  @Output('selectedMessage') selectedMessage: EventEmitter<any> =
    new EventEmitter();
  public currentlyOpenMessageId: number | null = null;
  public selectedType: string = 'inbox';
  public selectedMessages: any[] = [];
  public messages: any = [
    {
      id: 0,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 1,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 2,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 3,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 4,
      isFavorite: false,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 5,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 6,
      isFavorite: false,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 7,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 8,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 9,
      isFavorite: false,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 10,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 11,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 12,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 13,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 14,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 15,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 16,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 17,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 18,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 19,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 20,
      isFavorite: false,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 21,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 22,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 23,
      isFavorite: false,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 24,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 25,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 26,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 27,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 28,
      isFavorite: false,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 29,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 30,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 31,
      isFavorite: false,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 32,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 33,
      isFavorite: false,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 34,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 35,
      isFavorite: true,
      title: 'Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'sent',
    },
    {
      id: 36,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 37,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 38,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 39,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
    {
      id: 40,
      isFavorite: true,
      title: 'Inbox Sportbetting',
      text: 'They are big, bold and beautiful. Billboards have been around for quite a while. In almost all places nowadays you can find billboards of just about every product there is in the market. No matter how you see it, billboard advertising is on the rise. Compared to other forms of advertising, billboards are a more affordable way of getting your message across to the public. If newspaper advertising lasts only for a day and a television advertisement last for only about forty seconds, billboard adverting last 24/7. Billboards can connect easily with potential markets because more people are mobile nowadays – referring to the increasing number of commuters and more time spent outside of the house. Advances in technology have also made billboards more cost effective. Advances in digital printing have also allowed billboards to be printed cheaply and quickly on canvas. Lately, billboards have been getting pocket-friendly as well. But before you get your creative juices flowing and before you plunge into the exciting world of billboard advertising there things you need to understand. First, don’t expect the billboard to contain a lot of information. This is not just possible. The number one rule in billboard advertising is simplicity. This rule simply means that you need to use only a few words to get your message across. But this doesn’t mean that you can no longer make complex, intelligent and intriguing statements. You still can but in the simplest way you can.',
      date: '12/12/2023',
      type: 'inbox',
    },
  ];

  constructor(private router: Router, private activatedRout: ActivatedRoute) {}

  public get inboxMsgCount() {
    return this.messages.filter((msg: any) => msg.type === 'inbox').length;
  }

  public get sentMsgCount() {
    return this.messages.filter((msg: any) => msg.type === 'sent').length;
  }

  public openMessage(messageId: number) {
    if (this.currentlyOpenMessageId === messageId) {
      this.currentlyOpenMessageId = null;
    } else {
      this.currentlyOpenMessageId = messageId;
    }
  }

  public selectItem(event: Event, item: any): void {
    event.stopPropagation();
    const foundedIndex = this.selectedMessages.findIndex(
      (el: any) => el.id === item.id
    );
    if (foundedIndex !== -1) {
      this.selectedMessages.splice(foundedIndex, 1);
    } else {
      this.selectedMessages.push(item);
    }
  }

  public setClass(item: any): boolean {
    return this.selectedMessages.find((el: any) => el.id === item.id);
  }

  public get filteredMessages(): any[] {
    if (!this.selectedType) {
      return this.messages;
    }
    return this.messages.filter(
      (message: any) => message.type === this.selectedType
    );
  }

  public showType(type: string) {
    this.selectedType = type;
  }

  public clearAll() {}
}
