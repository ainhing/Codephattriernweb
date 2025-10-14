function calc_factorial(n)
{
    fact=1
    for (i=1;i<=n;i++) // i++ is same as i=i+1 tăng dần 1 đơn vị
    {
        fact*=i
    }
    return fact
}
function use_factorial(n,result)
{
    fact=calc_factorial(n)
    result.innerText=fact
}