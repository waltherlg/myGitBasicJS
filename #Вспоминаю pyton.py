#Вспоминаю pyton

#Катя узнала, что ей для сна надо XX минут. 
#В отличие от Коли, Катя ложится спать после полуночи 
#в HH часов и MM минут. 
#Помогите Кате определить, на какое время ей 
#поставить будильник, чтобы он прозвенел ровно 
#через XX минут после того, как она ляжет спать.

#На стандартный ввод, каждое в своей строке, подаются значения 
#XX, HH и MM. Гарантируется, что Катя должна проснуться 
#в тот же день, что и заснуть. 
# Программа должна выводить время, на которое 
# нужно поставить будильник: в первой строке часы, 
# во второй — минуты.

x = int(input())
h = int(input())
m = int(input())
hh = h * 60 + m
hh_n = hh + x
print (hh_n // 60)
print (hh_n % 60)